
import { createClient } from '@sanity/client';


const NEXT_PUBLIC_SANITY_PROJECT_ID='lma2ysa6'

const NEXT_PUBLIC_SANITY_DATASET='production'

const SANITY_API_WRITE_TOKEN='skBuELSHZpU5yW8EIvhiDohgEqiYzs8V1Yl0KelTbjV0FZZEh8bbiNyAwg1RFgU6V4PBW8QrLNJLT2NYhfj49gZ0z5vLywlYWBjiigVcfwRgwYzoNOhBIJAOOzljdQUA2LfLiKg7fwTgMlhdiPAe3xD1Hy6H31xx5rNTDblNtz7x18Ka738J'


export const writeClient = createClient({
    projectId: NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: NEXT_PUBLIC_SANITY_DATASET || 'production',
    token: SANITY_API_WRITE_TOKEN,
    apiVersion: '2023-10-01',
    useCdn: false, // Always false for write operations
  });
  