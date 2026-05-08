import { MemoryRouter } from 'react-router-dom';
import PropertyCard from './PropertyCard';
import { properties } from '../../data/properties';

export default {
  title: 'Components/PropertyCard',
  component: PropertyCard,
  decorators: [
    (Story) => (
      <MemoryRouter>
        {/* Un contenedor para simular el ancho de una tarjeta en la grilla */}
        <div style={{ maxWidth: '350px' }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export const Default = {
  args: {
    // The Whispering Manor es una propiedad típica
    property: properties[0], 
  },
};

export const Catastrophic = {
  args: {
    // Ravenscroft Estate tiene un hauntingRating de 5
    property: properties[2], 
  },
};

export const Friendly = {
  args: {
    // Blackthorn Cottage tiene primaryHaunting: 'friendly'
    property: properties[1], 
  },
};

export const NonNegotiable = {
  args: {
    // The Drowning House no es negociable (negotiable: false)
    property: properties[3], 
  },
};

export const Expensive = {
  args: {
    // The Forgotten Penthouse cuesta 3,200,000
    property: properties[9], 
  },
};