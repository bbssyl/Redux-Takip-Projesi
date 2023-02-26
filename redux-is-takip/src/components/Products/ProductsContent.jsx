import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
const ProductsContent = ({ products, handleProductDelete }) => {
  return (
    <div className="">
      <Row sm={1} className="p-4 g-4">
        {products?.map((product) => {
          return (
            <Col md={4} key={product.id}>
              <Card className="border-0 shadow-sm">
                <CardBody>
                  <CardTitle className="d-flex align-items-center justify-content-between">
                    <span className="fw-bold">{product.name}</span>
                    <div className="d-flex gap-2 align-items-center">
                      <small className="fw-lighter fst-italic">
                        {product.type}
                      </small>
                      <Button
                        color="white"
                        className="btn-sm text-secondary fs-5"
                      >
                        <AiFillEdit />
                      </Button>
                      <Button
                        color="white"
                        className="btn-sm text-danger fs-5"
                        onClick={() => handleProductDelete(product.id)}
                      >
                        <AiFillDelete />
                      </Button>
                    </div>
                  </CardTitle>
                  <div className="d-flex justify-content-between">
                    <CardText>
                      <span className="fw-bold">Marka: </span>
                      {product.brand}
                    </CardText>
                    <CardText>
                      <span className="fw-bold">Model: </span>
                      {product.model}
                    </CardText>
                    <CardText>
                      <span className="fw-bold">Fiyat: </span>
                      {product.price}
                    </CardText>
                  </div>
                  <CardText>
                    <span className="fw-bold">Açıklama: </span>
                    {product.info}
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ProductsContent;
