module ApplicationHelper
  def bootstrap_class_for(flash_type)
    flash_type = flash_type.to_sym
    case flash_type
      when :success
        "alert-success"
      when :error
        "alert-danger"
      when :alert
        "alert-warning"
      when :notice
        "alert-info"
      else
        flash_type.to_s
    end
  end
end
