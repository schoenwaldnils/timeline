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

    # http://wol.jw.org/en/wol/d/r1/lp-e/102009094#h=2:0-4:1032
    def bce(year)
      year = year.to_i
      if year < 0
        year = year * -1
        "#{year} B.C.E."
      else
        "#{year} C.E."
      end
    end

    def period(startyear, endyear)
      calced_period = endyear.to_i - startyear.to_i
      if startyear < 0 and endyear > 0
        calced_period = calced_period - 1
      end
      calced_period
    end
  end
end

Liquid::Template.register_filter(Jekyll::YearFilter)
