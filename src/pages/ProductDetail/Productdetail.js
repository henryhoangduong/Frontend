import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import Header from "../../layouts/Header";
import Button from "react-bootstrap/Button";
import Footer from "../../layouts/Footer";
import "./Productdetail.css";
import Cart_Button_AddToCart from "../../components/cart/Cart_Button_AddToCart.js";
import { useState } from "react";

function Productdetail() {
  const [quantities,setQuantities] = useState(1);
  const { id } = useParams();
  console.log(id);
  const { loading, error, productsList } = useFetch(
    `http://127.0.0.1:8000/api/read/products/${id}`
  );
  if (loading) return <p>loading</p>;

  if (error) return <p>error</p>;

  const QuantitiesOption = [];
  for (let i = 1; i <= 10; i++) {
    QuantitiesOption.push(i);
  }
  
  return (
    <>
      <Header></Header>
      <section class="py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="row gx-4 gx-lg-5 align-items-center">
            <div class="col-md-6">
              <img
                class="card-img-top mb-5 mb-md-0"
                src={productsList.image_url}
                alt="..."
              />
            </div>
            <div class="col-md-6">
              <div class="small mb-1">SKU: BST-498</div>
              <h1 class="display-10  fw-bolder">{productsList.name}</h1>
              <div class="fs-5 mb-5">
                <span>${productsList.price}</span>
              </div>
              <div>
                <p class="lead">
                  <strong>THÔNG TIN SẢN PHẨM:</strong>
                  <br />
                  <span>
                    Xuất xứ: Thương hiệu LEGO Đan Mạch, sản xuất tại Trung Quốc.
                  </span>
                  <br />
                  <span>Độ tuổi phù hợp: Từ 4 tuổi trở lên.</span>
                  <br />
                  <span>Số mảnh ghép: 790.</span>
                  <br />
                  <span>Kích thước hộp (cm): 36 x 26.2 x 18.</span>
                  <br />
                  <span>Chất liệu: Nhựa nguyên sinh, phủ sơn cao cấp</span>
                </p>

                <p>
                  <strong>
                    - Bộ Lắp Ráp Thùng Gạch Lớn Classic Sáng Tạo LEGO CLASSIC
                    10698
                  </strong>
                  - Nằm trong bộ chủ đề LEGO Classic, LEGO Large Creative Brick
                  Box LEGO 10698 gồm 790 chi tiết, dành cho trẻ trên 4 tuổi, là
                  món đồ chơi thú vị và hấp dẫn.
                </p>

                <p>
                  Trẻ có thể sử dụng các viên gạch đầy màu sắc, cùng với sự sáng
                  tạo và tư duy để hoàn thành các ngôi nhà với kiểu dáng đa
                  dạng, xe cần cẩu, xe gắn máy, chiếc máy chụp hình cổ điển, cô
                  nàng gấu đáng yêu, ... hoặc bất kỳ mô hình gì tùy theo sở
                  thích và khả năng.
                </p>

                <p>
                  Đặc biệt, bộ sản phẩm gồm các chi tiết đôi mắt, cánh cửa, bánh
                  xe, ... cho phép trẻ tạo nên các con vật, đồ vật ngộ nghĩnh,
                  đáng yêu mà mình yêu thích. LEGO 10698 sẽ mang lại cho trẻ
                  những phút giây vui chơi thú vị khi được tự mình tưởng tượng
                  và mày mò lắp ghép, rèn luyện tính tỉ mỉ cũng như khơi gợi khả
                  năng tư duy và sáng tạo ở từng trẻ.
                </p>

                <p>
                  <em>
                    <strong>Lưu ý:</strong> Hình ảnh và thông tin in trên bao bì
                    sản phẩm có thể thay đổi tùy theo từng đợt nhập hàng. Sản
                    phẩm có chi tiết nhỏ, không thích hợp cho trẻ dưới 3 tuổi.
                  </em>
                </p>

                <p>
                  Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành.
                  Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao
                  hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển,
                  phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao
                  từ nước ngoài có giá trị trên 1 triệu đồng).
                </p>
              </div>

              <div class="d-flex">
                <select
                  name="quantities"
                  className={"form-select mx-3"}
                  style={{ maxWidth: "80px" }}
                  id="quantities"
                  onChange={(e) => setQuantities(parseInt(e.target.value))}
                  value={quantities}
                >
                  {QuantitiesOption.map((num) =>
                    quantities === 1 ? (
                      <option key={num} value={num} selected>
                        {num}
                      </option>
                    ) : (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    )
                  )}
                </select>
                {}
                <Cart_Button_AddToCart productId={id} quantities={quantities} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Productdetail;
