require 'compass'
require 'breakpoint'

# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "."
css_dir = "assets/css"
sass_dir = "assets/scss"
images_dir = "assets/img"
javascripts_dir = "assets/js"
fonts_dir = "assets/fonts"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = :compact

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false

# Singularity currently uses some deprecated sass that compass complains about.
disable_warnings = true

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass scss scss && rm -rf sass && mv scss sass

sourcemap = true;
