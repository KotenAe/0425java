const l=JSON.parse('{"key":"v-7c68659b","path":"/blogs/Javse%E5%9F%BA%E7%A1%80/day23.%E5%8F%8D%E5%B0%84.html","title":"day25.\u53CD\u5C04","lang":"en-US","frontmatter":{"title":"day25.\u53CD\u5C04","date":"2022/07/01","tags":["Java\u57FA\u7840","\u53CD\u5C04"],"categories":["Java\u57FA\u7840"]},"excerpt":"","headers":[{"level":2,"title":"1.Junit\u4ECB\u7ECD","slug":"_1-junit\u4ECB\u7ECD","children":[]},{"level":2,"title":"2.Junit\u7684\u57FA\u672C\u4F7F\u7528(\u91CD\u70B9)","slug":"_2-junit\u7684\u57FA\u672C\u4F7F\u7528-\u91CD\u70B9","children":[]},{"level":2,"title":"3.Junit\u7684\u6CE8\u610F\u4E8B\u9879","slug":"_3-junit\u7684\u6CE8\u610F\u4E8B\u9879","children":[]},{"level":2,"title":"4.Junit\u76F8\u5173\u6CE8\u89E3","slug":"_4-junit\u76F8\u5173\u6CE8\u89E3","children":[]},{"level":2,"title":"5.@Test\u4EE5\u540E\u600E\u4E48\u4F7F\u7528","slug":"_5-test\u4EE5\u540E\u600E\u4E48\u4F7F\u7528","children":[]},{"level":2,"title":"1.\u7C7B\u52A0\u8F7D\u5668(\u4E86\u89E3)_ClassLoader","slug":"_1-\u7C7B\u52A0\u8F7D\u5668-\u4E86\u89E3-classloader","children":[]},{"level":2,"title":"1.class\u7C7B\u7684\u4EE5\u53CAclass\u5BF9\u8C61\u7684\u4ECB\u7ECD\u4EE5\u53CA\u53CD\u5C04\u4ECB\u7ECD","slug":"_1-class\u7C7B\u7684\u4EE5\u53CAclass\u5BF9\u8C61\u7684\u4ECB\u7ECD\u4EE5\u53CA\u53CD\u5C04\u4ECB\u7ECD","children":[]},{"level":2,"title":"2.\u53CD\u5C04\u4E4B\u83B7\u53D6Class\u5BF9\u8C61","slug":"_2-\u53CD\u5C04\u4E4B\u83B7\u53D6class\u5BF9\u8C61","children":[{"level":3,"title":"2.1.\u4E09\u79CD\u83B7\u53D6Class\u5BF9\u8C61\u7684\u65B9\u5F0F\u6700\u901A\u7528\u7684\u4E00\u79CD","slug":"_2-1-\u4E09\u79CD\u83B7\u53D6class\u5BF9\u8C61\u7684\u65B9\u5F0F\u6700\u901A\u7528\u7684\u4E00\u79CD","children":[]}]},{"level":2,"title":"3.\u83B7\u53D6Class\u5BF9\u8C61\u4E2D\u7684\u6784\u9020\u65B9\u6CD5","slug":"_3-\u83B7\u53D6class\u5BF9\u8C61\u4E2D\u7684\u6784\u9020\u65B9\u6CD5","children":[{"level":3,"title":"3.1.\u83B7\u53D6\u6240\u6709public\u7684\u6784\u9020\u65B9\u6CD5","slug":"_3-1-\u83B7\u53D6\u6240\u6709public\u7684\u6784\u9020\u65B9\u6CD5","children":[]},{"level":3,"title":"3.2.\u83B7\u53D6\u7A7A\u53C2\u6784\u9020_public","slug":"_3-2-\u83B7\u53D6\u7A7A\u53C2\u6784\u9020-public","children":[]},{"level":3,"title":"3.3.\u5229\u7528\u7A7A\u53C2\u6784\u9020\u521B\u5EFA\u5BF9\u8C61\u7684\u5FEB\u6377\u65B9\u5F0F_public","slug":"_3-3-\u5229\u7528\u7A7A\u53C2\u6784\u9020\u521B\u5EFA\u5BF9\u8C61\u7684\u5FEB\u6377\u65B9\u5F0F-public","children":[]},{"level":3,"title":"3.4.\u5229\u7528\u53CD\u5C04\u83B7\u53D6\u6709\u53C2\u6784\u9020\u5E76\u521B\u5EFA\u5BF9\u8C61_public","slug":"_3-4-\u5229\u7528\u53CD\u5C04\u83B7\u53D6\u6709\u53C2\u6784\u9020\u5E76\u521B\u5EFA\u5BF9\u8C61-public","children":[]},{"level":3,"title":"3.5.\u5229\u7528\u53CD\u5C04\u83B7\u53D6\u79C1\u6709\u6784\u9020(\u66B4\u529B\u53CD\u5C04)","slug":"_3-5-\u5229\u7528\u53CD\u5C04\u83B7\u53D6\u79C1\u6709\u6784\u9020-\u66B4\u529B\u53CD\u5C04","children":[]}]},{"level":2,"title":"4.\u53CD\u5C04\u65B9\u6CD5","slug":"_4-\u53CD\u5C04\u65B9\u6CD5","children":[{"level":3,"title":"4.1.\u5229\u7528\u53CD\u5C04\u83B7\u53D6\u6240\u6709\u6210\u5458\u65B9\u6CD5","slug":"_4-1-\u5229\u7528\u53CD\u5C04\u83B7\u53D6\u6240\u6709\u6210\u5458\u65B9\u6CD5","children":[]},{"level":3,"title":"4.2.\u53CD\u5C04\u4E4B\u83B7\u53D6\u65B9\u6CD5(\u6709\u53C2,\u65E0\u53C2)","slug":"_4-2-\u53CD\u5C04\u4E4B\u83B7\u53D6\u65B9\u6CD5-\u6709\u53C2-\u65E0\u53C2","children":[]}]},{"level":2,"title":"5.\u53CD\u5C04\u7EC3\u4E60(\u7F16\u5199\u4E00\u4E2A\u5C0F\u6846\u67B6)","slug":"_5-\u53CD\u5C04\u7EC3\u4E60-\u7F16\u5199\u4E00\u4E2A\u5C0F\u6846\u67B6","children":[]},{"level":2,"title":"1.\u6CE8\u89E3\u7684\u4ECB\u7ECD","slug":"_1-\u6CE8\u89E3\u7684\u4ECB\u7ECD","children":[]},{"level":2,"title":"2.\u6CE8\u89E3\u7684\u5B9A\u4E49\u4EE5\u53CA\u5C5E\u6027\u7684\u5B9A\u4E49\u683C\u5F0F","slug":"_2-\u6CE8\u89E3\u7684\u5B9A\u4E49\u4EE5\u53CA\u5C5E\u6027\u7684\u5B9A\u4E49\u683C\u5F0F","children":[]},{"level":2,"title":"3.\u6CE8\u89E3\u7684\u4F7F\u7528(\u91CD\u70B9)","slug":"_3-\u6CE8\u89E3\u7684\u4F7F\u7528-\u91CD\u70B9","children":[]},{"level":2,"title":"4.\u6CE8\u89E3\u89E3\u6790\u7684\u65B9\u6CD5->AnnotatedElement\u63A5\u53E3(\u6269\u5C55)","slug":"_4-\u6CE8\u89E3\u89E3\u6790\u7684\u65B9\u6CD5-annotatedelement\u63A5\u53E3-\u6269\u5C55","children":[]},{"level":2,"title":"1.\u6CE8\u89E3\u518D\u6B21\u89E3\u6790(\u6210\u529F\u4E86)","slug":"_1-\u6CE8\u89E3\u518D\u6B21\u89E3\u6790-\u6210\u529F\u4E86","children":[]}],"git":{},"filePathRelative":"blogs/Javse\u57FA\u7840/day23.\u53CD\u5C04.md"}');export{l as data};
