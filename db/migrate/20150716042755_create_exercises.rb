class CreateExercises < ActiveRecord::Migration
  def change
    create_table :exercises do |t|
      t.integer :routine_id, index: true
      t.integer :routine_exercise_id
      t.string :value

      t.timestamps null: false
    end
  end
end
