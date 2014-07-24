require "sinatra"
require "rack-flash"
require "gschool_database_connection"
require_relative "./lib/login_database"

class App < Sinatra::Application
  enable :sessions
  use Rack::Flash

  def initialize
    super
    @db = UserDb.new
  end

  get "/" do
    erb :login, :locals => {}, :layout => :layout
  end

  get "/register" do
    erb :register, :locals => {}, :layout => :layout
  end

  get "/logout" do
    session[:user_id] = nil
    redirect "/"
  end

  get "/jobs" do
    erb :jobs, :locals => {}, :layout => :layout
  end

  get "/form" do
    erb :form, :locals => {}, :layout => :layout
  end

  post "/register" do
    if params[:password] == "" && params[:username] == ""
      flash[:register_fail] = "Please enter a username and password."
      redirect "/register"
    elsif params[:password] == ""
      flash[:register_fail] = "Please enter a password."
      redirect "/register"
    elsif params[:username] == ""
      flash[:register_fail] = "Please enter a username."
      redirect "/register"
    elsif @db.username_taken?(params[:username])
      flash[:register_fail] = "That name is taken."
      redirect "/register"
    else
      @db.insert_user(params[:username], params[:password])
      flash[:register_notice] = "Thank you for registering"
      redirect "/"
    end
  end

  post "/login" do
    user_hashes_arr = @db.get_all_users
    user_hash = user_hashes_arr.detect do |hash|
      params[:username] == hash["username"] && params[:password] == hash["password"]
    end

    if user_hash
      session[:user_id] = user_hash["id"]
    else
      flash[:login_notice] = "I'm afraid we aren't aware of that username and password combination."
    end

    redirect "/"
  end


end