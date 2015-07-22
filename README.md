# Rails::Js::Kickstart

Basic JS setup for your project. At this moment the setup contains of:

- requestAnimationFrame polyfill
- window resize utility
	listens to window resize, throttles and fires an event.
- window scroll utility
	same as previous for window scroll.
- inview utility
	fires if an element is visible in the current viewport.
- statefits utility
	loop through a given set of CSS classes if they "fit" in their current context.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'rails-js-kickstart'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install rails-js-kickstart

## Usage

### Anonymous, self invoking functions

#### requestAnimationFrame.js

Anonymous, self invoking function with a polyfill for requestAnimationFrame.

#### jquery.resize.js

Anonymous, self invoking function to handle $(window).resize() event once. This event is throttled and only fires on "resizeReady".

#### jquery.scroll.js

Anonymous, self invoking function to handle $(window).resize() event. 

### Plugin utilities

To make some bits of code reusable between plugins without actually creating a plugin, I've created a pattern with which the following utilities can easily be used:

### jquery.inView.js

Checks if an element is visible within the current viewport. Once it is an inViewHandler method within the plugin can be defined which to describe plugin specific functionality.

### jquery.stateFits.js

Components often have state classes, e.g. is-large, is-medium and is-small. This utility checks for each state if it "fits" within the current context. From large to small it will apply the state class until a state which fits is found.


## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release` to create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

1. Fork it ( https://github.com/meavo/rails-js-kickstart/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
