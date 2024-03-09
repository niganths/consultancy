
import '../style/contact.css'; 
const ContactPage = () => {
   
    const shopLocation = {
        latitude:11.227490,
        longitude: 78.170170,
        zoom: 15,
        address: "167,Thiruchengode Road,Namakkal-637001"
    };

    return (
        <div className="contact-page-container">
            <div className="form-container">
                <h2>Contact Us</h2>
                <form action="https://getform.io/f/pbynnjpa" method="POST">
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" required />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-group">
                    <label>Company Name:</label>
                    <input type="text" name="company" />
                </div>
                <div className="form-group">
                    <label>Phone:</label>
                    <input type="tel" name="phone" />
                </div>
                <div className="form-group">
                    <label>Message:</label>
                    <textarea name="message" rows="5" required></textarea>
                </div>
                <button type="submit">Send</button>
    </form>
            </div>
            
            <div className="map-container">
                <iframe
                    title="Shop Location"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCsK9CEOPqn2RGsTCa7Y0nFq5rUkMlnYrc&q=${shopLocation.latitude},${shopLocation.longitude}&zoom=${shopLocation.zoom}`}
                    allowFullScreen
                ></iframe>
                <p>Address: {shopLocation.address}</p>
            </div>
        </div>
    );
};

export default ContactPage;
