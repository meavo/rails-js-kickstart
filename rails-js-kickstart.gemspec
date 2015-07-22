# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'rails/js/kickstart/version'

Gem::Specification.new do |spec|
  spec.name          = "rails-js-kickstart"
  spec.version       = Rails::Js::Kickstart::VERSION
  spec.authors       = ["Michaël van Oosten"]
  spec.email         = ["michael@vanoosten.me"]

  spec.summary       = %q{Basic JS setup for #Mangrove projects.}
  spec.description   = %q{At this moment the setup contains: requestAnimationFrame polyfill, window resize utility (listens to window resize, throttles and fires an event), window scroll utility (same as previous for window scroll), inview utility (fires if an element is visible in the current viewport) and a statefits utility (loop through a given set of CSS classes if they "fit" in their current context).}
  spec.homepage      = "https://github.com/meavo/rails-js-kickstart"

  # Prevent pushing this gem to RubyGems.org by setting 'allowed_push_host', or
  # delete this section to allow pushing this gem to any host.
  if spec.respond_to?(:metadata)
    spec.metadata['allowed_push_host'] = "TODO: Set to 'http://mygemserver.com'"
  else
    raise "RubyGems 2.0 or newer is required to protect against public gem pushes."
  end

  spec.files         = `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.9"
  spec.add_development_dependency "rake", "~> 10.0"
end
