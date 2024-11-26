class PagesController < ApplicationController
  def home
    @monuments = Monument.all
  end
end
