<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class BlogsTableSeeder extends Seeder {

	public function run()
	{
    DB::table('blogs')->truncate();
		$faker = Faker::create();

		for($i=0; $i < 10; $i++)
		{
			Blog::create([
        'title' => $faker->sentence(),
        'body'  => $faker->paragraph(5)
			]);
		}
	}

}