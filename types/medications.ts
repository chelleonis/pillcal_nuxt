export interface Medication {
id?: string
prescription_name: string
generic_name: string
notes?: string
as_needed: boolean,
max_daily_doses?: number
dose_period?: number
created_at?: string
updated_at?: string
}

//TODO: ensure that the types are matching the django backend
export interface MedicationSchedule {
id?: string
medication: number
start_date: string
end_date?: string
dose_amount: number
dose_unit: string
frequency_type: 'daily' | 'days_interval' | 'weekly' | 'monthly' | 'as_needed'
days_interval?: number
weekly_days?: string
is_active: boolean
}