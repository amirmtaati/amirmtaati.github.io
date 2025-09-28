;; Load required packages for syntax highlighting
(require 'package)
(add-to-list 'package-archives '("melpa" . "https://melpa.org/packages/") t)
(package-initialize)
(unless package-archive-contents
  (package-refresh-contents))
(unless (package-installed-p 'htmlize)
  (package-install 'htmlize))

(require 'ox-publish)

(setq org-publish-project-alist
      (list
       (list "website-org"
             :base-directory "./contents/"
             :base-extension "org"
             :publishing-directory "./public/"
             :recursive t
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
             :html-head-include-default-style t
             :html-head-include-scripts nil
             :auto-sitemap t
             :sitemap-filename "sitemap.org"
             :sitemap-title "All Posts"
             :sitemap-sort-files 'anti-chronologically
             :sitemap-file-entry-format "%d %t")
       (list "website-static"
             :base-directory "./"
             :base-extension "jpg\\|png\\|gif"
             :publishing-directory "./public/"
             :recursive t
             :publishing-function 'org-publish-attachment)
       (list "website" :components '("website-org" "website-static"))))

;; Publish everything
(org-publish-all t)
