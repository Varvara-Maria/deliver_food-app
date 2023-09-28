import React, {useState, useEffect} from "react";
import Helmet from "../components/Helmet/Helmet.js";
import "../styles/hero-section.css";
import '../styles/home.css'
import axios from "axios";
import Main from "../components/Home/Main";
import Info from "../components/Home/Info";
import AboutDelivery from "../components/Home/AboutDelivery";
import ProductCard from "../components/UI/product-card/ProductCard";
import {Col, Container, Row} from "reactstrap";

const Home = () => {

    const baseURL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    const [post, setPost] = useState(null);

    useEffect(async () => {
        await axios.get(baseURL)
            .then((response) => {
                setPost(response.data);
            })
    }, []);

    return (
        <Helmet title="Home">
            <Main />
            <Info />

            <section className="pt-0">
                <Container>
                    { !post ? (
                        <div>Wait</div>
                    ) : (
                        <Row>
                            <Col lg="12" className="text-center">
                                <h2>Popular Foods</h2>
                            </Col>

                            {post.categories.map((item) => (
                                <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                                    <ProductCard item={item}/>
                                </Col>
                            ))}
                        </Row>
                    )}
                </Container>
            </section>
            <AboutDelivery />
        </Helmet>
    );
};

export default Home;