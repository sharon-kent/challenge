# This file is used by Rack-based servers to start the application.

require_relative "config/environment"

Rails.application.load_server

app = Rack::Builder.new {
  use Rack::Static,
    urls: ["/fonts", "/img", "/static", "/globalstyle", "/robots.txt"],
    root: "app/build",
    index: "index.html"

  run lambda { |_env|
    [
      200,
      {
        "Content-Type" => "text/html"
      },
      File.open("app/build/index.html", File::RDONLY)
    ]
  }
}

run Rack::URLMap.new(
  "/" => app,
  "/api" => Rails.application
)
