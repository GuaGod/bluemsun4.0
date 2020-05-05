import API from '../api/index.js'

class Performance {
    constructor() {
        this._performance = window.performance;
        this._api = new API('performance');
        this.times = {};
    }

    calculate() {
        let times = this.times,
            t = this._performance.timing;

        //页面加载完成的时间
        times.loadPage = t.loadEventEnd - t.navigationStart;

        //解析 DOM 树结构的时间
        times.domReady = t.domComplete - t.responseEnd;

        //重定向的时间
        times.redirect = t.redirectEnd - t.redirectStart;

        //DNS 查询时间      
        times.lookupDomain = t.domainLookupEnd - t.domainLookupStart;

        //读取页面第一个字节的时间
        times.ttfb = t.responseStart - t.navigationStart;

        //内容加载完成的时间
        times.request = t.responseEnd - t.requestStart;

        //执行 onload 回调函数的时间
        times.loadEvent = t.loadEventEnd - t.loadEventStart;

        // DNS 缓存时间
        times.appcache = t.domainLookupStart - t.fetchStart;

        // 卸载页面的时间
        times.unloadEvent = t.unloadEventEnd - t.unloadEventStart;

        // TCP 建立连接完成握手的时间
        times.connect = t.connectEnd - t.connectStart;

        return times;
    }

    submit() {
        return this._api.submit(this.times);
    }
}

export default Performance