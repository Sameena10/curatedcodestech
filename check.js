<div className="services-container">
    {services.map((service, index) => (
      <div className={`service-row ${index % 2 === 1 ? 'reverse' : ''}`} key={index}>
        <div className="service-image-container" >
          <div className="icon-square-box">
            {/* {service.icon} */}
            <img src={service.icon} alt={service.title} />

          </div>
        </div>
        <div className="service-content">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <ul>
            {service.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>