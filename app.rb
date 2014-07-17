require "sinatra"
require "rack-flash"
require "gschool_database_connection"

class App < Sinatra::Application
  enable :sessions
  use Rack::Flash

  def initialize
    super
    @database_connection = GschoolDatabaseConnection.establish(ENV(["RACK_ENV"]))
  end

  get "/" do

  end
end