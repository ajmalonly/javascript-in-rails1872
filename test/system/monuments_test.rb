require "application_system_test_case"

class MonumentsTest < ApplicationSystemTestCase
  setup do
    @monument = monuments(:one)
  end

  test "visiting the index" do
    visit monuments_url
    assert_selector "h1", text: "Monuments"
  end

  test "should create monument" do
    visit monuments_url
    click_on "New monument"

    fill_in "Address", with: @monument.address
    fill_in "Name", with: @monument.name
    fill_in "Opening date", with: @monument.opening_date
    click_on "Create Monument"

    assert_text "Monument was successfully created"
    click_on "Back"
  end

  test "should update Monument" do
    visit monument_url(@monument)
    click_on "Edit this monument", match: :first

    fill_in "Address", with: @monument.address
    fill_in "Name", with: @monument.name
    fill_in "Opening date", with: @monument.opening_date
    click_on "Update Monument"

    assert_text "Monument was successfully updated"
    click_on "Back"
  end

  test "should destroy Monument" do
    visit monument_url(@monument)
    click_on "Destroy this monument", match: :first

    assert_text "Monument was successfully destroyed"
  end
end
