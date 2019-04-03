from django.shortcuts import render


def BootstrapFilterView(request):
    return render(request, "bootstrap_form.html", {})
