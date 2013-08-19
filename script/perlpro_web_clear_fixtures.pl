#!/usr/bin/env perl
use warnings;
use strict;

use FindBin '$Bin';
use lib "$Bin/../lib";
use lib "$Bin/../t/lib";

use PerlPro::TestTools;

my $t = PerlPro::TestTools->new(test_root_dir => "$Bin/../t");
$t->clear_fixtures;

print "cleared.\n";