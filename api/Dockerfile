FROM ruby:2.5.3

RUN apt update && \
    apt install -y build-essential libpq-dev nodejs

RUN mkdir /project
RUN mkdir /project/api
ENV APP_ROOT /project/api
WORKDIR $APP_ROOT

ADD ./Gemfile $APP_ROOT/Gemfile
ADD ./Gemfile.lock $APP_ROOT/Gemfile.lock

RUN bundle install
ADD . $APP_ROOT
