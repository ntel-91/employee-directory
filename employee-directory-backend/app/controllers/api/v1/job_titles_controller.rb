class Api::V1::JobTitlesController < ApplicationController
    def index
        job_titles = JobTitle.all
        render json: job_titles
    end
end
