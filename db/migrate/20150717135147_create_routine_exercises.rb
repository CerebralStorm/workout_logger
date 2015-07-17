class CreateRoutineExercises < ActiveRecord::Migration
  def change
    create_table :routine_exercises do |t|
      t.integer :routine_id, index: true
      t.integer :position
      t.boolean :rest
      t.string :name

      t.timestamps null: false
    end
  end
end
