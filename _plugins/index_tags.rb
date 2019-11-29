module Jekyll
  # Generate a tag page per page.
  class IndexTags < Generator
    safe true
    def generate(site)
      return unless site.layouts.key? 'tag'

      find_tags(site).each do |tag, posts|
        path = File.join('tags')
        page = TagPage.new(site, site.source, path, tag, posts)
        site.pages << page
      end
    end

    def find_tags(site)
      map = {}
      site.posts.docs.each do |page|
        next unless page.data.key?('tags')

        page.data['tags'].each do |tag|
          map[tag] ||= []
          map[tag] << page
        end
      end
      map
    end
  end

  # Page listing all posts with a tag.
  class TagPage < Page
    def initialize(site, base, dir, tag, posts)
      @site = site
      @base = base
      @dir = dir
      @posts = posts
      @name = "#{Utils.slugify(tag)}.html"

      process(@name)
      read_yaml(File.join(base, '_layouts'), 'tag.html')
      data['tag'] = tag
      data['posts'] = posts
    end
  end
end
