import React from 'react'

const Propertycard = () => {
  return (
    <>
<div class="row">
  <div class="col-md-8">
    <div class="property-image">
      <img src="/assets/img/property-1.jpg" alt="Property Image" />
    </div>
    <div class="property-info">
      <h2>Stunning Luxury Home</h2>
      <p>This beautiful home features high-end finishes, a spacious layout, and a large backyard.</p>
      <p>Price: $750,000</p>
      <p>Location: 123 Main St, Anytown, USA</p>
    </div>
  </div>
  <div class="col-md-4">
    <div class="agent-info">
      <h3>Listing Agent</h3>
      <p>John Doe</p>
      <p><a href="mailto:john.doe@example.com">john.doe@example.com</a></p>
      <p>(555) 555-5555</p>
    </div>
  </div>
</div>    </>
  
  )
}

export default Propertycard