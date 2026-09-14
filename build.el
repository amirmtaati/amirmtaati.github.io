;;; build.el --- Publish Amir Mohammad's zen blog -*- lexical-binding: t; -*-
;;
;; Usage:  emacs --batch -l build.el
;; (or open in Emacs and run `M-x eval-buffer')
;;
;; Design system lives in ./style.css.  This file wires it into every
;; published page: fonts, navigation, date kickers and footers are all
;; generated here, so the whole site is managed from Emacs.

(require 'package)
(add-to-list 'package-archives '("melpa" . "https://melpa.org/packages/") t)
(package-initialize)
(unless package-archive-contents
  (package-refresh-contents))
(unless (package-installed-p 'htmlize)
  (package-install 'htmlize))

(require 'ox-publish)
(require 'htmlize)

;;; ---------------------------------------------------------------------
;;; Zen syntax palette (kept in sync with style.css)
;;; ---------------------------------------------------------------------
(custom-set-faces
 '(font-lock-keyword-face       ((t (:foreground "#6b6bb0"))))
 '(font-lock-string-face        ((t (:foreground "#7f8b45"))))
 '(font-lock-comment-face       ((t (:foreground "#a09b8c" :italic t))))
 '(font-lock-comment-delimiter-face ((t (:foreground "#a09b8c" :italic t))))
 '(font-lock-function-name-face ((t (:foreground "#b06c49"))))
 '(font-lock-variable-name-face ((t (:foreground "#565247"))))
 '(font-lock-type-face          ((t (:foreground "#4a7d9b"))))
 '(font-lock-constant-face      ((t (:foreground "#9c6b3f"))))
 '(font-lock-builtin-face       ((t (:foreground "#3e8a7e"))))
 '(font-lock-preprocessor-face  ((t (:foreground "#8a6a9c"))))
 '(default                      ((t (:background "#f1eee5" :foreground "#57544a")))))

(setq org-html-htmlize-output-type 'css)

;;; ---------------------------------------------------------------------
;;; Shared page chrome
;;; ---------------------------------------------------------------------
(defconst my/site-title "Amir Mohammad")

;; <head> additions for every page: fonts, stylesheet, favicon (enso).
(defconst my/head-html
  "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\"/>
<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin=\"anonymous\"/>
<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Inter:wght@400..700&family=JetBrains+Mono:ital,wght@0,400..600;1,400..600&family=Newsreader:ital,opsz,wght@0,6..72,400..700;1,6..72,400..700&display=swap\"/>
<link rel=\"stylesheet\" href=\"/style.css\" type=\"text/css\"/>
<link rel=\"icon\" href=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='33' fill='none' stroke='%2362785c' stroke-width='9' stroke-linecap='round' stroke-dasharray='178 30' transform='rotate(-70 50 50)'/%3E%3C/svg%3E\"/>")

(defun my/post-date (info)
  "Return the formatted #+DATE of the current file as a string, or nil."
  (ignore-errors
    (let ((raw (plist-get info :date)))
      (when raw
        (let* ((text (if (stringp raw) raw (org-element-interpret-data raw)))
               (ts (org-timestamp-from-string text)))
          (when ts
            (format-time-string "%B %-e, %Y" (org-timestamp-to-time ts))))))))

(defun my/html-preamble (info)
  "Site-wide header: brand + nav, plus a date kicker for dated posts."
  (let ((date (my/post-date info)))
    (concat
     "<nav class=\"site-nav\">\n"
     (format "<a class=\"brand\" href=\"/index.html\">%s</a>\n" my/site-title)
     "<div class=\"nav-links\">\n"
     "<a href=\"/posts/sitemap.html\">Posts</a>\n"
     "<a href=\"/about.html\">About</a>\n"
     "<a href=\"/reading.html\">Reading</a>\n"
     "<a href=\"/contact.html\">Contact</a>\n"
     "</div>\n"
     "</nav>\n"
     (when date (format "<p class=\"kicker\">%s</p>\n" date)))))

(defun my/html-postamble (info)
  "Site-wide footer; dated pages get a gentle way back."
  (let ((date (my/post-date info)))
    (concat
     "<footer class=\"site-footer\">\n"
     (when date "<p class=\"backlink\"><a href=\"/posts/sitemap.html\">← All posts</a></p>\n")
     (format "<p class=\"fineprint\">© %s %s · Grown slowly with Emacs &amp; Org-mode</p>\n"
             (format-time-string "%Y") my/site-title)
     "</footer>")))

(defun my/sitemap-entry (entry style project)
  "Format a posts-project sitemap entry as: Title <date chip>."
  (let* ((date (org-publish-find-date entry project))
         (title (org-publish-find-title entry project)))
    (format "- [[file:%s][%s]] <span class=\"post-date\">%s</span>"
            entry title
            (format-time-string "%b %-e, %Y" date))))

;;; ---------------------------------------------------------------------
;;; Publishing projects
;;; ---------------------------------------------------------------------
(defconst my/html-properties
  (list
   :publishing-function 'org-html-publish-to-html
   :headline-levels 4
   :auto-preamble t
   :with-author nil
   :with-creator nil
   :section-numbers nil
   :time-stamp-file nil
   :with-toc nil
   :html-doctype "html5"
   :html-html5-fancy t
   :html-head-include-default-style nil
   :html-head-include-scripts nil
   :html-head my/head-html
   :html-preamble 'my/html-preamble
   :html-postamble 'my/html-postamble))

(setq org-publish-project-alist
      (list
       ;; Top-level pages (index, about, reading, contact)
       (append
        (list "website-pages"
              :base-directory "./contents/"
              :base-extension "org"
              :exclude "posts/"
              :recursive nil
              :publishing-directory "./docs/")
        my/html-properties)
       ;; Posts, with an auto-generated archive page (All Posts)
       (append
        (list "website-posts"
              :base-directory "./contents/posts/"
              :base-extension "org"
              :recursive t
              :publishing-directory "./docs/posts/"
              :auto-sitemap t
              :sitemap-filename "sitemap.org"
              :sitemap-title "All Posts"
              :sitemap-sort-files 'anti-chronologically
              :sitemap-format-entry 'my/sitemap-entry)
        my/html-properties)
       ;; Images
       (list "website-static"
             :base-directory "./public/"
             :base-extension "jpg\\|png\\|gif\\|svg\\|ico"
             :publishing-directory "./docs/public/"
             :recursive t
             :publishing-function 'org-publish-attachment)
       ;; Stylesheet
       (list "website-css"
             :base-directory "./"
             :base-extension "css"
             :publishing-directory "./docs/"
             :recursive nil
             :publishing-function 'org-publish-attachment)
       (list "website" :components
             '("website-pages" "website-posts" "website-static" "website-css"))))

;;; Publish everything
(org-publish-all t)
