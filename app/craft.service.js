System.register(['./mockcrafts', '@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var mockcrafts_1, core_1;
    var CraftService;
    return {
        setters:[
            function (mockcrafts_1_1) {
                mockcrafts_1 = mockcrafts_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CraftService = (function () {
                function CraftService() {
                }
                CraftService.prototype.getCrafts = function (startIndex, endIndex) {
                    if (startIndex && endIndex) {
                        return Promise.resolve(mockcrafts_1.CRAFTS).then(function (crafts) { return crafts.filter(function (craft) { return craft.id >= endIndex && craft.id < startIndex; }); });
                    }
                    return Promise.resolve(mockcrafts_1.CRAFTS);
                };
                CraftService.prototype.getCraft = function (id) {
                    return Promise.resolve(mockcrafts_1.CRAFTS).then(function (crafts) { return crafts.filter(function (craft) { return craft.id === id; })[0]; });
                };
                CraftService.prototype.getLength = function () {
                    return mockcrafts_1.CRAFTS.length;
                };
                CraftService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CraftService);
                return CraftService;
            }());
            exports_1("CraftService", CraftService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JhZnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyYWZ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFBQTtnQkFhQSxDQUFDO2dCQVpBLGdDQUFTLEdBQVQsVUFBVSxVQUFtQixFQUFFLFFBQWdCO29CQUM5QyxFQUFFLENBQUMsQ0FBQyxVQUFVLElBQUksUUFBUSxDQUFDLENBQUEsQ0FBQzt3QkFDM0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsbUJBQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsRUFBRSxJQUFJLFFBQVEsSUFBSSxLQUFLLENBQUMsRUFBRSxHQUFHLFVBQVUsRUFBN0MsQ0FBNkMsQ0FBQyxFQUFyRSxDQUFxRSxDQUFDLENBQUM7b0JBQ3RILENBQUM7b0JBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsbUJBQU0sQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO2dCQUNELCtCQUFRLEdBQVIsVUFBUyxFQUFVO29CQUNsQixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxtQkFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUExQyxDQUEwQyxDQUFDLENBQUM7Z0JBQzNGLENBQUM7Z0JBQ0QsZ0NBQVMsR0FBVDtvQkFDQyxNQUFNLENBQUMsbUJBQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQ3RCLENBQUM7Z0JBZEY7b0JBQUMsaUJBQVUsRUFBRTs7Z0NBQUE7Z0JBZWIsbUJBQUM7WUFBRCxDQUFDLEFBYkQsSUFhQztZQWJELHVDQWFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NSQUZUU30gZnJvbSAnLi9tb2NrY3JhZnRzJztcclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuXHJcbmV4cG9ydCBjbGFzcyBDcmFmdFNlcnZpY2Uge1xyXG5cdGdldENyYWZ0cyhzdGFydEluZGV4PzogbnVtYmVyLCBlbmRJbmRleD86bnVtYmVyKXtcclxuXHRcdGlmIChzdGFydEluZGV4ICYmIGVuZEluZGV4KXtcclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShDUkFGVFMpLnRoZW4oY3JhZnRzID0+IGNyYWZ0cy5maWx0ZXIoY3JhZnQgPT4gY3JhZnQuaWQgPj0gZW5kSW5kZXggJiYgY3JhZnQuaWQgPCBzdGFydEluZGV4KSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKENSQUZUUyk7XHJcblx0fVxyXG5cdGdldENyYWZ0KGlkOiBudW1iZXIpe1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShDUkFGVFMpLnRoZW4oY3JhZnRzID0+IGNyYWZ0cy5maWx0ZXIoY3JhZnQgPT4gY3JhZnQuaWQgPT09IGlkKVswXSk7XHJcblx0fVxyXG5cdGdldExlbmd0aCgpe1xyXG5cdFx0cmV0dXJuIENSQUZUUy5sZW5ndGg7XHJcblx0fVxyXG59Il19