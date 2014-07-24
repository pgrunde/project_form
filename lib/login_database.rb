require "gschool_database_connection"

class UserDb
  def initialize
    super
    @database_connection = GschoolDatabaseConnection::DatabaseConnection.establish(ENV["RACK_ENV"])
  end

  def insert_user(username, password)
    @database_connection.sql("INSERT INTO users (username, password) VALUES ('#{username}', '#{password}')")
  end

  def get_other_users(id)
    @database_connection.sql("SELECT * FROM users WHERE id <> #{id}")
  end

  def get_all_users
    @database_connection.sql("SELECT * FROM users")
  end

  def username_taken?(name)
    # returns true if username is taken
    @database_connection.sql("SELECT username FROM users WHERE username='#{name}'") != []
  end

end