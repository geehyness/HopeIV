// Run this in the Sanity CLI or Studio console
client.patch('*[_type == "order" && !defined(paymentMethod)]')
  .set({paymentMethod: 'cash'})
  .commit()
  .then(updated => console.log(`Updated ${updated.length} orders`))
  .catch(err => console.error('Update failed:', err))
