# Year to creational calendar

module Jekyll
  module YearFilter
    def yearcc(year)
      year = year.to_i
      if year < 0
        year + 4026
      elsif year > 0
        year + 4025
      else
        abort "There is no year zero in the gregorian calendar!"
      end
    end

    def age(birthyear, deathyear)
      deathyear.to_i - birthyear.to_i
    end
  end
end

Liquid::Template.register_filter(Jekyll::YearFilter)
