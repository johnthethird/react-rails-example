class PagesController < ApplicationController


  def index
  end

  def show
    @emails = [].tap do |a|
      a << {unread: false, desc: "Hey, I just wanted to check in with you from Toronto. I got here earlier today.", name: "Tilo Mitra", avatar: "http://lorempixel.com/50/50/people/?p=1", subject: "Hello from Toronto", timestamp: "3:56pm, April 3, 2012", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
      a << {unread: true, desc: "Hey, I had some feedback for pull request #51. We should center the menu so it looks better on mobile.", name: "Eric Ferraiuolo", avatar: "http://lorempixel.com/50/50/people/?p=2", subject: "Re: Pull Requests", timestamp: "2:27pm, April 3, 2012", content: "Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
      # a << {unread: true, desc: "Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla.", name: "YUI Library", avatar: "http://lorempixel.com/50/50/people/?p=3", subject: "You have 5 bugs assigned to you", timestamp: "12:05am, April 2, 2012", content: "Aliquam ac feugiat dolor. Proin mattis massa sit amet enim iaculis tincidunt. Mauris tempor mi vitae sem aliquet pharetra. Fusce in dui purus, nec malesuada mauris. Curabitur ornare arcu quis mi blandit laoreet. Vivamus imperdiet fermentum mauris, ac posuere urna tempor at. Duis pellentesque justo ac sapien aliquet egestas. Morbi enim mi, porta eget ullamcorper at, pharetra id lorem."}
      # a << {unread: false, desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.", name: "Reid Burke", avatar: "http://lorempixel.com/50/50/people/?p=4", subject: "Re: Design Language", timestamp: "1:00pm, April 2, 2012", content: "Donec sagittis dolor ut quam pharetra pretium varius in nibh. Suspendisse potenti. Donec imperdiet, velit vel adipiscing bibendum, leo eros tristique augue, eu rutrum lacus sapien vel quam. Nam orci arcu, luctus quis vestibulum ut, ullamcorper ut enim. Morbi semper erat quis orci aliquet condimentum. Nam interdum mauris sed massa dignissim rhoncus."}
      # a << {unread: false, desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.", name: "Andrew Wooldridge", avatar: "http://lorempixel.com/50/50/people/?p=5", subject: "YUI Blog Updates?", timestamp: "12:59pm, April 2, 2012", content: "Nevermind, I got it."}
      # a << {unread: false, desc: "Mauris tempor mi vitae sem aliquet pharetra. Fusce in dui purus, nec malesuada mauris.", name: "Yahoo! Finance", avatar: "http://lorempixel.com/50/50/people/?p=6", subject: "How to protect your finances from winter storms", timestamp: "12:00pm, April 2, 2012", content: "I ran out of Lorem Ipsum!"}
    end
  end

end