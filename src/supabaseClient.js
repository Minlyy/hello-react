import { createClient } from "@supabase/supabase-js"

const supabaseUrl = 'https://ncdrjnizxlidosbznxjg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jZHJqbml6eGxpZG9zYnpueGpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcwMjM4NzgsImV4cCI6MTk5MjU5OTg3OH0.VgCLCRkvXTfWOI-DwYm6XLoyl8XjUa82kk7zxNCm_9k'
export const supabase = createClient(supabaseUrl, supabaseKey)