package PerlPro::Web::Controller::Company::Data;
use Moose;
use namespace::autoclean;
use utf8;

BEGIN { extends 'Catalyst::Controller' }

sub display : Chained('/company/requires_login') PathPart('data') Args(0) GET {
    my ( $self, $ctx ) = @_;
    # display page of "Company Data"
    # load data from DB
}

sub update : Chained('/company/requires_login') PathPart('data') Args(1) PUT {
    my ( $self, $ctx, $field ) = @_;
    # update a given field (by AJAX)
}

sub add_data : Chained('/company/requires_login') PathPart('add_data') Args(0) POST {
    my ( $self, $ctx ) = @_;
    # add a new item of the given field (by AJAX), e.g., add new phone
}

sub remove_data : Chained('/company/requires_login') PathPart('remove') Args(2) DELETE {
    my ( $self, $ctx, $field, $item ) = @_;
    # remove item of the given field (by AJAX), e.g., delete phone
}

__PACKAGE__->meta->make_immutable;

1;

__END__

=pod

=encoding utf8

=head1 NAME

PerlPro::Web::Controller::Company::Job - Catalyst Controller

=head1 DESCRIPTION

Controller for a logged in user, from a company, update company data.

=head1 METHODS

=head2 index

=head1 AUTHOR

André Walker

=head1 LICENSE

This file is part of PerlPro.

PerlPro is free software: you can redistribute it and/or modify it under the
terms of the GNU Affero General Public License as published by the Free
Software Foundation, either version 3 of the License, or (at your option) any
later version.
