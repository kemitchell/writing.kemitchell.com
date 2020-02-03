module Jekyll
  # Generate a series page per series.
  class IndexSeries < Generator
    safe true
    def generate(site)
      return unless site.layouts.key? 'series'

      find_series(site).each do |series, posts|
        path = File.join('series')
        page = SeriesPage.new(site, site.source, path, series, posts)
        site.pages << page
      end
    end

    def find_series(site)
      map = {}
      site.posts.docs.each do |page|
        next unless page.data.key?('series')

        series = page.data['series']
        map[series] ||= []
        map[series] << page
      end
      map
    end
  end

  # Generate pages listing to all posts in each series.
  class SeriesPage < Page
    def initialize(site, base, dir, series, posts)
      @site = site
      @base = base
      @dir = dir
      @posts = posts
      @name = "#{Utils.slugify(series)}.html"

      process(@name)
      read_yaml(File.join(base, '_layouts'), 'series.html')
      data['series'] = series
      data['posts'] = posts
    end
  end
end
