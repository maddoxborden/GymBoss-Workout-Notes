// Shared Supabase client for gymbossnotes.com. Same project the app uses.
// The publishable/anon key below is meant to be public — it is the exact
// same key already shipped inside the compiled Gym Boss app bundle, and
// every table it can reach is protected by row level security, not by
// keeping this key secret.
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.110.8';

export const supabase = createClient(
  'https://qragkvnzfddmahujgzix.supabase.co',
  'sb_publishable_vhht_e1BPI6zvsU9RfnOqQ_e8S0_Gwd',
);
