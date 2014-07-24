feature "login_page" do
  before(:each) do
    visit "/"
  end

  scenario "user loads intial log in page" do
    expect(page).to have_content("Username")
    expect(page).to have_content("Password")
  end

  scenario "user registers a new account, tries to enter empty inputs or a taken username" do
    click_link "Register"
    expect(page).to have_content("Enter a username")
    expect(page).to have_content("Enter a password")

    fill_in "username", :with => ""
    fill_in "password", :with => ""
    click_button "Submit"
    expect(page).to have_content("Please enter a username and password.")

    fill_in "username", :with => "peter"
    fill_in "password", :with => ""
    click_button "Submit"
    expect(page).to have_content("Please enter a password.")

    fill_in "username", :with => ""
    fill_in "password", :with => "123"
    click_button "Submit"
    expect(page).to have_content("Please enter a username")

    fill_in "username", :with => "peter"
    fill_in "password", :with => "123"
    click_button "Submit"
    expect(page).to have_content("Thank you for registering")

    click_link "Register"
    fill_in "username", :with => "peter"
    fill_in "password", :with => "123"
    click_button "Submit"
    expect(page).to have_content("That name is taken.")
  end

  scenario "user logs in and sees links for Candidates, Jobs, Options" do
    click_link "Register"
    fill_in "username", :with => "peter"
    fill_in "password", :with => "123"
    click_button "Submit"
    fill_in "username", :with => "peter"
    fill_in "password", :with => "123"
    click_button "Log In"
    expect(page).to have_content("Your Candidates")
    expect(page).to have_content("Your Jobs")
    expect(page).to have_content("Options")
  end
end