const blogs = {
  "3-van-de-ve-hieu-nang-trong-javascript-ma-ban-nen-can-nhac": {
    name: "3 vấn đề về hiệu năng trong JavaScript mà bạn nên cân nhắc",
    thumbnail: "https://cdn-images-1.medium.com/max/1600/0*9ZI7OIRHE7ARhiuK",
    time: "24/12/2018",
    content:
      "<p>Bạn sẽ cảm thấy thế nào nếu tôi nói rằng những thứ bạn đã học là không đúng? Điều gì sẽ xảy ra khi bạn hào hứng học những tính năng mới nhất của ECMAScript mà không hề biết đến những cái bẫy về hiệu năng tiềm tàng, được ẩn giấu sau những dòng code tưởng chừng gọn đẹp đó?</p>\
      <p>Câu chuyện này đã bắt đầu từ cách đây vài năm, kể từ thời ES5 ...</p>\
      <p><img src='https://cdn-images-1.medium.com/max/1600/0*9ZI7OIRHE7ARhiuK' alt=''/></p>\
      <p>Tôi vẫn còn nhớ ngày này rất rõ ràng, ngày mà ES5 xuất hiện, với rất nhiều hàm xử lý mảng mới được giới thiệu. Nổi trội nhất trong số đó là forEach, reduce, map, filter - chúng tạo cho ta cảm giác JavaScript đang phát triển, nhiều chức năng hơn, viết code nhẹ nhàng, gọn gàng, dễ đọc hơn.</p>\
      <p>Cùng khoảng thời gian đó, Node.js xuất hiện. Node.js cho ta khả năng chuyển đổi dễ dàng từ front-end sang back-end đồng thời viết lại định nghĩa full-stack.</p>\
      <p>Cho tới bây giờ Node.js, với phiên bản mới nhất của ECMAScript và nền tảng V8, đã trở thành 1 phần không thể thiếu trong hệ sinh thái các ngôn ngữ lập trình server-side và như một điều kiện cần, nó phải chứng tỏ được hiệu năng của mình. Tuy nhiên hãy nhớ 1 điều: chẳng có ngôn ngữ nào là bá chủ. Do đó, ta sẽ cần đặt ra câu hỏi: sử dụng những tính năng mới cứng đã đề cập ở trên có thực sự giúp cho hiệu năng của ứng dụng tốt hơn hay không? Hay chúng sẽ làm mọi thứ tệ hơn?</p>\
      <p>Thêm vào đó, với việc ngày càng nhiều người dùng sử hữu những cỗ máy mạnh mẽ và đường truyền tốc độ cao, JavaScript phía client đã lớn mạnh thực sự, không chỉ gói gọn trong việc hiển thị nữa. Nhưng vấn đề tiếp tục hiển hiện: liệu ta có thể tin tưởng hoàn toàn vào JavaScript khi ứng dụng của ta là 1 ứng dụng phức tạp, cần 1 hiệu năng gần như tuyệt đối?</p>\
      <p>Để trả lời những câu hỏi này, tôi sẽ thử 1 số trường hợp và đào sâu để hiểu chúng, những việc này tôi thực hiện với Node.js 10.11.0 và trình duyệt Chrome trên macOS.</p>\
      <h3>1. Lặp một mảng</h3>\
      <p>Trường hợp đầu tiên nảy ra trong đầu tôi là tính tổng 1 mảng gồm 10000 phần tử. Đây là 1 tình huống thường gặp khi làm việc, bạn sẽ cần phải lấy 1 danh sách phần tử rất lớn từ cơ sở dữ liệu và chỉnh sửa nó mà không muốn phải query thêm lần nữa.</p>\
      <p>Tôi sẽ lặp phép toán trên với for, for-of, while, forEach và reduce. Chạy bài test 10000 lần được kết quả:</p>\
      <pre class='code'><code>For Loop, average loop time: ~10 microseconds\nFor-Of, average loop time: ~110 microseconds\nForEach, average loop time: ~77 microseconds\nWhile, average loop time: ~11 microseconds\nReduce, average loop time: ~113 microseconds</code></pre>\
      <p>Khi google tìm cách tính tổng 1 mảng, reduce là phương pháp được khuyến nghị sử dụng, tuy nhiên trong trường hợp này nó cũng là cái chậm nhất. Với forEach thì chả tốt hơn là bao. Kể cả tính năng mới nhất for-of của ES6 cũng có tốc độ thua kém những người đồng nghiệp. Hóa ra phương pháp for loop cũ nhất lại cho ta tốc độ nhanh nhất.</p>\
      <p>Thế thì tại sao những tính năng mới nhất, được khuyến khích sử dụng lại cho tốc độ chậm như thế? Hóa ra có 2 lý do. reduce và forEach yêu cầu 1 hàm callback để gọi đệ quy phục vụ việc tính toán, chính vì gọi đệ quy nên stack bị phình ra, làm chậm tốc độ xử lý. Một lý do khác là những toán tử thêm và kiểm tra được thực thi ở mỗi lần lặp (bạn có thể xem thêm ở <a href='https://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.21' target='_blank'>đây</a>).</p>\
      <h3>2. Sao chép một mảng</h3>\
      <p>Nghe có vẻ nhạt nhẽo nhưng đây là tính năng cốt lõi của những hàm thuần khuyết, là những hàm không làm biến đổi đầu vào trong khi xử lý cho ra kết quả đầu ra.</p>\
      <p>Bài test hiệu năng dưới đây lại tiếp tục cho ra 1 kết quả thú vị: khi sao chép 10000 mảng gồm 10000 phần tử ngẫu nhiên, những hàm thuộc diện 'lão làng' lại tiếp tục chiếm ưu thế. Đối với hot trend mới nhất của ES6 là toán tử spread và phương thức from của class Array (Array.from()), cả hàm map của ES5 (array.map(x => x)) đều cho kết quả kém hơn những phương pháp cổ điển như arr.slice() hay [].concat(arr)</p>\
      <pre class='code'><code>Duplicate using Slice, average: ~367 microseconds\nDuplicate using Map, average: ~469 microseconds\nDuplicate using Spread, average: ~512 microseconds\nDuplicate using Conct, average: ~366 microseconds\nDuplicate using Array From, average: ~1,436 microseconds\nDuplicate manually, average: ~412 microseconds</code></pre>\
      <h3>3. Duyệt đối tượng</h3>\
      <p>Một trường hợp phổ biến khác là duyệt qua đối tượng. Đây là một việc cần thiết khi làm việc với đối tượng, JSON. Ở đây ta sẽ có các phương pháp như for-in, Object.keys(obj) (ES6) và Object.entries(obj) (ES8).</p>\
      <p>Phân tích hiệu năng khi duyệt qua 10000 đối tượng, mỗi đối tượng chứa 1000 key và value ngẫu nhiên với những phương pháp trên cho ta kết quả:</p>\
      <pre class='code'><code>Object iterate For-In, average: ~240 microseconds\nObject iterate Keys For Each, average: ~294 microseconds\nObject iterate Entries For-Of, average: ~535 microseconds</code></pre>\
      <p>Nguyên nhân cho kết quả này là do việc khởi tạo mảng enum đối với 2 phương pháp sau đã làm giảm đáng kể tốc độ xử lý so với việc duyệt trực tiếp đối tượng mà không cần phải tạo mảng các key.</p>\
      <h3>Lời cuối</h3>\
      <p>Nếu ứng dụng của bạn cần tốc độ cực nhanh thì sử dụng những tính năng \"mới nhất\" có thể sẽ làm giảm đi đáng kể tốc độ ứng dụng của bạn. Lúc này hãy linh hoạt với những phương án \"cũ\" hơn.</p>\
      <p>Nguồn: <a href='https://hackernoon.com/3-javascript-performance-mistakes-you-should-stop-doing-ebf84b9de951' target='_blank'>https://hackernoon.com/3-javascript-performance-mistakes-you-should-stop-doing-ebf84b9de951</a></p>",
  },
};
