<?php

class Blog extends Eloquent {
	protected $fillable = ['title', 'body'];
  protected $table = 'blogs';

}