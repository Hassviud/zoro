function openPayment(productName, price) {
    const modal = document.getElementById('payment-modal');
    const orderInfo = document.getElementById('order-info');
    
    orderInfo.innerHTML = `
        <div style="background: #f1f5f9; padding: 15px; border-radius: 10px; margin-bottom: 15px;">
            <strong>المنتج:</strong> ${productName} <br>
            <strong>المبلغ:</strong> <span style="color: #10b981;">${price}$</span>
        </div>
    `;
    
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('payment-modal').style.display = 'none';
}

// إغلاق النافذة عند الضغط خارجها
window.onclick = function(event) {
    const modal = document.getElementById('payment-modal');
    if (event.target == modal) {
        closeModal();
    }
}

// محاكاة نجاح الدفع
document.getElementById('payment-form').onsubmit = function(e) {
    e.preventDefault();
    alert('شكراً لك! تم استلام طلبك وجاري معالجة الدفع عبر Stripe.');
    closeModal();
};
