const isWechat = /MicroMessenger/i.test('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
console.log('isWechat:', isWechat);
console.log('qr-tip:', isWechat ? '长按二维码联系我们' : '扫码联系我们');
