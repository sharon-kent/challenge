class AddActiveDefaultValue < ActiveRecord::Migration[6.1]
  def change
    change_column_default :subscribers, :active, from: nil, to: 1
  end
end
