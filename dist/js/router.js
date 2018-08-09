'use strict';var Router={routes:[],mode:null,root:'/',config:function config(options){this.mode=options&&options.mode&&options.mode==='history'&&!!window.history.pushState?'history':'hash';this.root=options&&options.root?'/'+this.clearSlashes(options.root)+'/':'/';return this},clearSlashes:function clearSlashes(path){return path.toString().replace(/\/$/,'').replace(/^\//,'')},add:function add(re,handler){if(typeof re==='function'){handler=re;re=''}this.routes.push({re:re,handler:handler});return this},remove:function remove(param){for(var i=0;i<this.routes.length;i++){var r=this.routes[i];if(r.handler===param||r.re.toString()===param.toString()){this.routes.splice(i,1);return this}}return this},flush:function flush(){this.routes=[];this.mode=null;this.root='/';return this},listen:function listen(){var self=this;var current=self.getFragment();var fn=function fn(){if(current!==self.getFragment()){current=self.getFragment();self.check(current)}};clearInterval(this.interval);this.interval=setInterval(fn,50);return this},navigate:function navigate(path){path=path||'';if(this.mode==='history'){window.history.pushState(null,null,this.root+this.clearSlashes(path))}else{window.location.href=window.location.href.replace(/#(.*)$/,'')+'#'+path}return this}};// configuration
Router.config({mode:'history'});// returning the user to the initial state
Router.navigate();// adding routes
Router.add(/about/,function(){console.log('about')}).add(/products\/(.*)\/edit\/(.*)/,function(){console.log('products',arguments)}).add(function(){console.log('default')}).check('/products/12/edit/22').listen();// forwarding
Router.navigate('/about');
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlci5qcyJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJyb3V0ZXMiLCJtb2RlIiwicm9vdCIsImNvbmZpZyIsIm9wdGlvbnMiLCJ3aW5kb3ciLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiY2xlYXJTbGFzaGVzIiwicGF0aCIsInRvU3RyaW5nIiwicmVwbGFjZSIsImFkZCIsInJlIiwiaGFuZGxlciIsInB1c2giLCJyZW1vdmUiLCJwYXJhbSIsImkiLCJsZW5ndGgiLCJyIiwic3BsaWNlIiwiZmx1c2giLCJsaXN0ZW4iLCJzZWxmIiwiY3VycmVudCIsImdldEZyYWdtZW50IiwiZm4iLCJjaGVjayIsImNsZWFySW50ZXJ2YWwiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibmF2aWdhdGUiLCJsb2NhdGlvbiIsImhyZWYiLCJjb25zb2xlIiwibG9nIiwiYXJndW1lbnRzIl0sIm1hcHBpbmdzIjoiYUFBQSxHQUFJQSxRQUFTLENBQ1hDLE9BQVEsRUFERyxDQUVYQyxLQUFNLElBRkssQ0FHWEMsS0FBTSxHQUhLLENBSVhDLE1BSlcsaUJBSUhDLE9BSkcsQ0FJTSxDQUNmLEtBQUtILElBQUwsQ0FDRUcsU0FDQUEsUUFBUUgsSUFEUixFQUVBRyxRQUFRSCxJQUFSLEdBQWlCLFNBRmpCLEVBR0EsQ0FBQyxDQUFDSSxPQUFPQyxPQUFQLENBQWVDLFNBSGpCLENBSUksU0FKSixDQUtJLE1BTk4sQ0FPQSxLQUFLTCxJQUFMLENBQ0VFLFNBQVdBLFFBQVFGLElBQW5CLENBQ0ksSUFBTSxLQUFLTSxZQUFMLENBQWtCSixRQUFRRixJQUExQixDQUFOLENBQXdDLEdBRDVDLENBRUksR0FITixDQUlBLE1BQU8sS0FDUixDQWpCVSxDQWtCWE0sWUFsQlcsdUJBa0JHQyxJQWxCSCxDQWtCUyxDQUNsQixNQUFPQSxNQUNKQyxRQURJLEdBRUpDLE9BRkksQ0FFSSxLQUZKLENBRVcsRUFGWCxFQUdKQSxPQUhJLENBR0ksS0FISixDQUdXLEVBSFgsQ0FJUixDQXZCVSxDQXdCWEMsR0F4QlcsY0F3Qk5DLEVBeEJNLENBd0JGQyxPQXhCRSxDQXdCTyxDQUNoQixHQUFJLE1BQU9ELEdBQVAsR0FBYyxVQUFsQixDQUE4QixDQUM1QkMsUUFBVUQsRUFBVixDQUNBQSxHQUFLLEVBQ04sQ0FDRCxLQUFLYixNQUFMLENBQVllLElBQVosQ0FBaUIsQ0FBRUYsR0FBSUEsRUFBTixDQUFVQyxRQUFTQSxPQUFuQixDQUFqQixFQUNBLE1BQU8sS0FDUixDQS9CVSxDQWdDWEUsTUFoQ1csaUJBZ0NIQyxLQWhDRyxDQWdDSSxDQUNiLElBQUssR0FBSUMsR0FBSSxDQUFiLENBQWdCQSxFQUFJLEtBQUtsQixNQUFMLENBQVltQixNQUFoQyxDQUF3Q0QsR0FBeEMsQ0FBNkMsQ0FDM0MsR0FBSUUsR0FBSSxLQUFLcEIsTUFBTCxDQUFZa0IsQ0FBWixDQUFSLENBQ0EsR0FBSUUsRUFBRU4sT0FBRixHQUFjRyxLQUFkLEVBQXVCRyxFQUFFUCxFQUFGLENBQUtILFFBQUwsS0FBb0JPLE1BQU1QLFFBQU4sRUFBL0MsQ0FBaUUsQ0FDL0QsS0FBS1YsTUFBTCxDQUFZcUIsTUFBWixDQUFtQkgsQ0FBbkIsQ0FBc0IsQ0FBdEIsRUFDQSxNQUFPLEtBQ1IsQ0FDRixDQUNELE1BQU8sS0FDUixDQXpDVSxDQTBDWEksS0ExQ1csaUJBMENGLENBQ1AsS0FBS3RCLE1BQUwsQ0FBYyxFQUFkLENBQ0EsS0FBS0MsSUFBTCxDQUFZLElBQVosQ0FDQSxLQUFLQyxJQUFMLENBQVksR0FBWixDQUNBLE1BQU8sS0FDUixDQS9DVSxDQWdEWHFCLE1BaERXLGtCQWdERCxDQUNSLEdBQUlDLE1BQU8sSUFBWCxDQUNBLEdBQUlDLFNBQVVELEtBQUtFLFdBQUwsRUFBZCxDQUNBLEdBQUlDLElBQUssUUFBTEEsR0FBSyxFQUFZLENBQ25CLEdBQUlGLFVBQVlELEtBQUtFLFdBQUwsRUFBaEIsQ0FBb0MsQ0FDbENELFFBQVVELEtBQUtFLFdBQUwsRUFBVixDQUNBRixLQUFLSSxLQUFMLENBQVdILE9BQVgsQ0FDRCxDQUNGLENBTEQsQ0FNQUksY0FBYyxLQUFLQyxRQUFuQixFQUNBLEtBQUtBLFFBQUwsQ0FBZ0JDLFlBQVlKLEVBQVosQ0FBZ0IsRUFBaEIsQ0FBaEIsQ0FDQSxNQUFPLEtBQ1IsQ0E1RFUsQ0E2RFhLLFFBN0RXLG1CQTZERHZCLElBN0RDLENBNkRLLENBQ2RBLEtBQU9BLE1BQVEsRUFBZixDQUNBLEdBQUksS0FBS1IsSUFBTCxHQUFjLFNBQWxCLENBQTZCLENBQzNCSSxPQUFPQyxPQUFQLENBQWVDLFNBQWYsQ0FBeUIsSUFBekIsQ0FBK0IsSUFBL0IsQ0FBcUMsS0FBS0wsSUFBTCxDQUFZLEtBQUtNLFlBQUwsQ0FBa0JDLElBQWxCLENBQWpELENBQ0QsQ0FGRCxJQUVPLENBQ0xKLE9BQU80QixRQUFQLENBQWdCQyxJQUFoQixDQUNFN0IsT0FBTzRCLFFBQVAsQ0FBZ0JDLElBQWhCLENBQXFCdkIsT0FBckIsQ0FBNkIsUUFBN0IsQ0FBdUMsRUFBdkMsRUFBNkMsR0FBN0MsQ0FBbURGLElBQ3RELENBQ0QsTUFBTyxLQUNSLENBdEVVLENBQWIsQ0F5RUE7QUFDQVYsT0FBT0ksTUFBUCxDQUFjLENBQUVGLEtBQU0sU0FBUixDQUFkLEVBRUE7QUFDQUYsT0FBT2lDLFFBQVAsR0FFQTtBQUNBakMsT0FBT2EsR0FBUCxDQUFXLE9BQVgsQ0FBb0IsVUFBWSxDQUM5QnVCLFFBQVFDLEdBQVIsQ0FBWSxPQUFaLENBQ0QsQ0FGRCxFQUdHeEIsR0FISCxDQUdPLDRCQUhQLENBR3FDLFVBQVksQ0FDN0N1QixRQUFRQyxHQUFSLENBQVksVUFBWixDQUF3QkMsU0FBeEIsQ0FDRCxDQUxILEVBTUd6QixHQU5ILENBTU8sVUFBWSxDQUNmdUIsUUFBUUMsR0FBUixDQUFZLFNBQVosQ0FDRCxDQVJILEVBU0dSLEtBVEgsQ0FTUyxzQkFUVCxFQVVHTCxNQVZILEdBWUE7QUFDQXhCLE9BQU9pQyxRQUFQLENBQWdCLFFBQWhCIiwiZmlsZSI6InJvdXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBSb3V0ZXIgPSB7XG4gIHJvdXRlczogW10sXG4gIG1vZGU6IG51bGwsXG4gIHJvb3Q6ICcvJyxcbiAgY29uZmlnIChvcHRpb25zKSB7XG4gICAgdGhpcy5tb2RlID1cbiAgICAgIG9wdGlvbnMgJiZcbiAgICAgIG9wdGlvbnMubW9kZSAmJlxuICAgICAgb3B0aW9ucy5tb2RlID09PSAnaGlzdG9yeScgJiZcbiAgICAgICEhd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlXG4gICAgICAgID8gJ2hpc3RvcnknXG4gICAgICAgIDogJ2hhc2gnXG4gICAgdGhpcy5yb290ID1cbiAgICAgIG9wdGlvbnMgJiYgb3B0aW9ucy5yb290XG4gICAgICAgID8gJy8nICsgdGhpcy5jbGVhclNsYXNoZXMob3B0aW9ucy5yb290KSArICcvJ1xuICAgICAgICA6ICcvJ1xuICAgIHJldHVybiB0aGlzXG4gIH0sXG4gIGNsZWFyU2xhc2hlcyAocGF0aCkge1xuICAgIHJldHVybiBwYXRoXG4gICAgICAudG9TdHJpbmcoKVxuICAgICAgLnJlcGxhY2UoL1xcLyQvLCAnJylcbiAgICAgIC5yZXBsYWNlKC9eXFwvLywgJycpXG4gIH0sXG4gIGFkZCAocmUsIGhhbmRsZXIpIHtcbiAgICBpZiAodHlwZW9mIHJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBoYW5kbGVyID0gcmVcbiAgICAgIHJlID0gJydcbiAgICB9XG4gICAgdGhpcy5yb3V0ZXMucHVzaCh7IHJlOiByZSwgaGFuZGxlcjogaGFuZGxlciB9KVxuICAgIHJldHVybiB0aGlzXG4gIH0sXG4gIHJlbW92ZSAocGFyYW0pIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm91dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgciA9IHRoaXMucm91dGVzW2ldXG4gICAgICBpZiAoci5oYW5kbGVyID09PSBwYXJhbSB8fCByLnJlLnRvU3RyaW5nKCkgPT09IHBhcmFtLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXMuc3BsaWNlKGksIDEpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH0sXG4gIGZsdXNoICgpIHtcbiAgICB0aGlzLnJvdXRlcyA9IFtdXG4gICAgdGhpcy5tb2RlID0gbnVsbFxuICAgIHRoaXMucm9vdCA9ICcvJ1xuICAgIHJldHVybiB0aGlzXG4gIH0sXG4gIGxpc3RlbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgdmFyIGN1cnJlbnQgPSBzZWxmLmdldEZyYWdtZW50KClcbiAgICB2YXIgZm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoY3VycmVudCAhPT0gc2VsZi5nZXRGcmFnbWVudCgpKSB7XG4gICAgICAgIGN1cnJlbnQgPSBzZWxmLmdldEZyYWdtZW50KClcbiAgICAgICAgc2VsZi5jaGVjayhjdXJyZW50KVxuICAgICAgfVxuICAgIH1cbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpXG4gICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKGZuLCA1MClcbiAgICByZXR1cm4gdGhpc1xuICB9LFxuICBuYXZpZ2F0ZSAocGF0aCkge1xuICAgIHBhdGggPSBwYXRoIHx8ICcnXG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ2hpc3RvcnknKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgdGhpcy5yb290ICsgdGhpcy5jbGVhclNsYXNoZXMocGF0aCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvIyguKikkLywgJycpICsgJyMnICsgcGF0aFxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG59XG5cbi8vIGNvbmZpZ3VyYXRpb25cblJvdXRlci5jb25maWcoeyBtb2RlOiAnaGlzdG9yeScgfSlcblxuLy8gcmV0dXJuaW5nIHRoZSB1c2VyIHRvIHRoZSBpbml0aWFsIHN0YXRlXG5Sb3V0ZXIubmF2aWdhdGUoKVxuXG4vLyBhZGRpbmcgcm91dGVzXG5Sb3V0ZXIuYWRkKC9hYm91dC8sIGZ1bmN0aW9uICgpIHtcbiAgY29uc29sZS5sb2coJ2Fib3V0Jylcbn0pXG4gIC5hZGQoL3Byb2R1Y3RzXFwvKC4qKVxcL2VkaXRcXC8oLiopLywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKCdwcm9kdWN0cycsIGFyZ3VtZW50cylcbiAgfSlcbiAgLmFkZChmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ2RlZmF1bHQnKVxuICB9KVxuICAuY2hlY2soJy9wcm9kdWN0cy8xMi9lZGl0LzIyJylcbiAgLmxpc3RlbigpXG5cbi8vIGZvcndhcmRpbmdcblJvdXRlci5uYXZpZ2F0ZSgnL2Fib3V0JylcbiJdfQ==
