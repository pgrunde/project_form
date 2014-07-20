require "spec_helper"

describe FormGen do

  describe "#foo" do

    it "foo" do
      "foo"
    end

  end
end

feature "form_page" do
  before(:each) do
    visit "/"
  end
  scenario "user loads initial form page" do
    click_link "Text"
    expect(page).to have_content("Text Label")
  end
end