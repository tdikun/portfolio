# Settings
activate :directory_indexes
activate :livereload

# Layouts
page "/journal/2013/*", :layout => "article"
page "/journal/2014/*", :layout => "article"
page "/journal/index.html", :layout => false

# Asset Directories
set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'

helpers do
  def is_page_active(page)
    current_page.url == page ? {:class => 'is-active'} : {}
  end
end

# Build-specific configuration
configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :cache_buster
  activate :relative_assets
end
