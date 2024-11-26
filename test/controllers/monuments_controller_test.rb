require "test_helper"

class MonumentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @monument = monuments(:one)
  end

  test "should get index" do
    get monuments_url
    assert_response :success
  end

  test "should get new" do
    get new_monument_url
    assert_response :success
  end

  test "should create monument" do
    assert_difference("Monument.count") do
      post monuments_url, params: { monument: { address: @monument.address, name: @monument.name, opening_date: @monument.opening_date } }
    end

    assert_redirected_to monument_url(Monument.last)
  end

  test "should show monument" do
    get monument_url(@monument)
    assert_response :success
  end

  test "should get edit" do
    get edit_monument_url(@monument)
    assert_response :success
  end

  test "should update monument" do
    patch monument_url(@monument), params: { monument: { address: @monument.address, name: @monument.name, opening_date: @monument.opening_date } }
    assert_redirected_to monument_url(@monument)
  end

  test "should destroy monument" do
    assert_difference("Monument.count", -1) do
      delete monument_url(@monument)
    end

    assert_redirected_to monuments_url
  end
end
