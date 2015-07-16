json.array!(@exercises) do |exercise|
  json.extract! exercise, :id, :value
  json.url exercise_url(exercise, format: :json)
end
