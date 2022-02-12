import {
  Table,
  Card,
  Button,
  Col,
  Row,
  CardGroup,
  Carousel,
} from "react-bootstrap";

const Products = () => {
  return (
    <div className="container">
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src="https://i.postimg.cc/KzKXjnqV/gfore.jpg"
          />
          <Card.Body>
            <Card.Title>G FORE</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://i.postimg.cc/DfS1jYhW/pxgwo.jpg"
          />
          <Card.Body>
            <Card.Title>PXG</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://i.postimg.cc/Pq62ZpW0/titleist.jpg"
          />
          <Card.Body>
            <Card.Title>Titleist</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://i.postimg.cc/KzKXjnqV/gfore.jpg"
          />
          <Card.Body>
            <Card.Title>Titleist</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <br />

      <Carousel variant="light">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.postimg.cc/PJv3dX89/slider.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.postimg.cc/PJv3dX89/slider.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.postimg.cc/PJv3dX89/slider.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Products;
