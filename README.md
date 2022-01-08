# Beehiiv - Challenge

## What is Challenge?

Challenge is a rails/react app meant to be used with our code challenge assignment. Use this as the starting point for your code challenge.

## The Stack

#### Server
- Language
  - Ruby 2.7
  - Rails 6
  - Node 14

# Development Getting Started

    # Clone and setup repo
    git clone git@github.com:beehiiv/challenge.git
    cd challenge

    # Install and setup server dependencies
    bundle install
    bundle exec rake db:create db:migrate
    yarn install

## Run it

    # Backend (http://localhost:2000)
    bundle exec foreman start

    # Frontend (http://localhost:2001)
    yarn watch:app

## Test It

    # Setup test DB for testing
    ./scripts/setup_test_db

    # Run tests
    bundle exec rspec

## Lint It

    bundle exec standardrb

## What it contains

### Index Page

![image](https://user-images.githubusercontent.com/5751986/138575193-5c8129fe-4bd6-4d08-93e8-606c9d7e6372.png)

### Add Subscriber Modal

![image](https://user-images.githubusercontent.com/5751986/138575195-366d8677-ccf8-482c-aa37-57c2b182ab8b.png)