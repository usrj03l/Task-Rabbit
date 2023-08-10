import { Component, Input } from '@angular/core';
import { Observable, map, take, switchMap } from 'rxjs';
import jsPDFInvoiceTemplate, { OutputType } from "jspdf-invoice-template";
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-bill',
  templateUrl: './user-bill.component.html',
  styleUrls: ['./user-bill.component.css']
})
export class UserBillComponent {
  @Input() billDetails$ = new Observable<any>();
  props: any;
  billData: any;
  providerData$: any;
  providerInfo: any
  constructor(private api: ApiService) { }

  ngOnInit() {
    //  this.billDetails$.pipe(take(1)).subscribe(data => {
    //     this.billData = data[0];

    // }); 

    // this.billDetails$.pipe(take(1)).subscribe(data => this.billData = data);
    // this.providerData$ = this.billDetails$.pipe(switchMap(provider => this.api.getProviderInfo(provider[0].providerUid)));
    // this.providerData$.pipe(take(1)).subscribe((data: any) => this.providerInfo = data);



  }

  downloadBill(bill:any,transaction:any) {

    this.api.getProviderInfo(transaction.providerUid).pipe(take(1))
    .subscribe((provider:any) => {

      this.props = {
        outputType: OutputType.Save,
        returnJsPDFDocObject: true,
        fileName: "Invoice 2021",
        orientationLandscape: false,
        compress: true,
        logo: {
          src: "http://localhost:3000/images/company-logo.jpg",
          type: 'JPG', //optional, when src= data:uri (nodejs case)
          width: 53.33, //aspect ratio = width/height
          height: 26.66,
          margin: {
            top: 0, //negative or positive num, from the current position
            left: 0 //negative or positive num, from the current position
          }
        },
        stamp: {
          inAllPages: true, //by default = false, just in the last page
          src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/qr_code.jpg",
          type: 'JPG', //optional, when src= data:uri (nodejs case)
          width: 20, //aspect ratio = width/height
          height: 20,
          margin: {
            top: 0, //negative or positive num, from the current position
            left: 0 //negative or positive num, from the current position
          }
        },
        business: {
          name: provider.orgName,
          address: provider.city + ', ' + provider.state,
          phone: String(provider.phone),
          email: provider.email,
        },
        contact: {
          label: "Invoice issued for:",
          name: bill.name,
          address: bill.address,
          phone: String(bill.phone),
          email: bill.email,
        },
        invoice: {
          label: "Invoice #: ",
          num: 19,
          invDate: "Payment Date: " + bill.date,
          invGenDate: "Invoice Date: " + bill.date,
          headerBorder: false,
          tableBodyBorder: false,
          header: [
            {
              title: "No.",
              style: {
                width: 10
              }
            },
            {
              title: "Description",
              style: {
                width: 80
              }
            },
            { title: "Quantity" },
            { title: "Price(INR)" },
          ],
          table: bill.itemList.map((item: { desc: string; qty: Number; price: Number; }, index: number) => ([
            index + 1,
            item.desc,
            item.qty,
            item.price,
          ])),
          additionalRows: [{
            col1: 'Total:',
            col2: String(bill.totalCost),
            col3: 'ALL',
            style: {
              fontSize: 14 //optional, default 12
            }
          }],
          invDescLabel: "Invoice Note",
          invDesc: "This invoice is generated to provide the detailed bill of the services provided by" + transaction.orgName,
        },
        footer: {
          text: "The invoice is computer generated.",
        },
        pageEnable: true,
        pageLabel: "Page ",
      };

      jsPDFInvoiceTemplate(this.props);
    });

    
    
  }
}
